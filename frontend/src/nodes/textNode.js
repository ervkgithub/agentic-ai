// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';
import { Position, useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Handle parsing logic
  useEffect(() => {
    const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(variableRegex)];
    const variables = Array.from(new Set(matches.map(m => m[1])));

    const newHandles = variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      style: { top: `${(index + 1) * 20}px` } // Simple positioning strategy
    }));

    // Always keep the output handle
    newHandles.push({ type: 'source', position: Position.Right, id: `${id}-output` });

    setHandles(newHandles);
  }, [currText, id]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [handles, id, updateNodeInternals]);


  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const content = (
    <div className="text-node-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="node-header">
        <span>Text</span>
      </div>
      <div className="node-body" style={{ flexGrow: 1 }}>
        <label style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          Text:
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
            style={{
              width: '100%',
              minHeight: '40px',
              resize: 'none',
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          />
        </label>
      </div>
    </div>
  );

  return (
    <BaseNode
      id={id}
      content={content}
      handles={handles}
    />
  );
}
