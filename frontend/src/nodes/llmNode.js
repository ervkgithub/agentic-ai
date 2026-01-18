// llmNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  const content = (
    <div className="llm-node-content">
      <div className="node-header">
        <span>LLM</span>
      </div>
      <div className="node-body">
        <span>This is a LLM.</span>
      </div>
    </div>
  );

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100 / 3}%` } },
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200 / 3}%` } },
    { type: 'source', position: Position.Right, id: `${id}-response` }
  ];

  return (
    <BaseNode
      id={id}
      content={content}
      handles={handles}
    />
  );
}
