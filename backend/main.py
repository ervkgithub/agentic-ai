from fastapi import FastAPI, Form, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # DAG Check (Cycle Detection using DFS)
    adj = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge['source']
        target = edge['target']
        if source in adj:
            adj[source].append(target)
            
    visited = set()
    recursion_stack = set()
    
    def has_cycle(node_id):
        visited.add(node_id)
        recursion_stack.add(node_id)
        
        if node_id in adj:
            for neighbor in adj[node_id]:
                if neighbor not in visited:
                    if has_cycle(neighbor):
                        return True
                elif neighbor in recursion_stack:
                    return True
        
        recursion_stack.remove(node_id)
        return False
    
    is_dag = True
    for node in nodes:
        node_id = node['id']
        if node_id not in visited:
            if has_cycle(node_id):
                is_dag = False
                break
    
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
