# 🚀 Frontend Technical Assessment - Submission

**Date:** 2026-01-18  
**Author:** [Vijay Kumar]

---

## 📋 Assessment Task Checklist

The following tasks have been completed as per the requirements:

### **Part 1: Node Abstraction**
- [x] **Base Component**: Created `BaseNode.js` to abstract common logic and styling.
- [x] **Refactoring**: Refactored `InputNode`, `OutputNode`, `LLMNode`, and `TextNode` to use the abstraction.
- [x] **New Nodes**: Created 5 new nodes to demonstrate flexibility:
  - `TransformNode`
  - `FilterNode`
  - `APINode`
  - `DatabaseNode`
  - `NoteNode`

### **Part 2: Styling**
- [x] **Unified Design**: Implemented a premium, modern look using CSS variables in `index.css`.
- [x] **UI Elements**: Styled nodes with shadows, rounded corners, and hover effects.

### **Part 3: Text Node Logic**
- [x] **Auto-Resizing**: `TextNode` automatically adjusts its height based on content.
- [x] **Dynamic Handles**: Parsing `{{ variable }}` syntax creates input handles dynamically.

### **Part 4: Backend Integration**
- [x] **Endpoint**: Implemented `/pipelines/parse` in FastAPI.
- [x] **Logic**: Added DAG detection (Cycle Check) and node/edge counting.
- [x] **Integration**: Connected frontend `Submit` button to the backend.

---

## 🛠️ Implementation Walkthrough

### 1. Node Abstraction Architecture
To improve maintainability, I introduced a `BaseNode` component. This component accepts `content` (React Element) and `handles` (Array of configs) as props. This allows for:
- **Consistent Styling**: All nodes share the same container styles.
- **Reduced Boilerplate**: Handle positioning and rendering are managed centrally.
- **Scalability**: New nodes can be created in minutes by defining only their unique inputs/outputs.

### 2. Styling System
I opted for a clean, professional aesthetic using native CSS variables for easy theming:
- **Palette**: Indigo (`#4f46e5`) for primary actions, Pink (`#ec4899`) for secondary accents.
- **Interactions**: Smooth transitions and hover states for better user feedback.

### 3. Advanced Text Node Features
The `TextNode` utilizes React hooks for advanced functionality:
- `useRef` & `useEffect`: To measure and update the textarea height dynamically.
- `regex`: To parse variable patterns (e.g., `{{ input }}`) and update the handles state in real-time using `useUpdateNodeInternals`.

### 4. Backend Logic
The backend uses **FastAPI** for high performance.
- **DAG Detection**: Implemented a Depth-First Search (DFS) algorithm to detect cycles in the graph.
- **Response**: Returns `{ num_nodes, num_edges, is_dag }`.

---

## ⚡ How to Run

### Prerequisites
- **Node.js** & **npm**
- **Python 3.8+** & **pip**

### Step 1: Start the Backend
Navigate to the `backend` directory and install dependencies:
```bash
cd backend
python -m pip install fastapi uvicorn python-multipart
```

Start the server:
```bash
python -m uvicorn main:app --reload
```

### Step 2: Start the Frontend
Navigate to the `frontend` directory:
```bash
cd frontend
npm install
npm start
```

### Step 3: Verify Integration
1. Open [http://localhost:3000](http://localhost:3000).
2. Create a pipeline.
3. Click **Submit**. You should see an alert with the pipeline statistics and DAG status.
