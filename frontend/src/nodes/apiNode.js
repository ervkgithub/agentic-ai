// apiNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const APINode = ({ id, data }) => {
    const [url, setUrl] = useState(data.url || 'https://api.example.com');
    const [method, setMethod] = useState(data.method || 'GET');

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const handleMethodChange = (e) => {
        setMethod(e.target.value);
    };

    const content = (
        <div className="api-node-content">
            <div className="node-header">
                <span>API Call</span>
            </div>
            <div className="node-body">
                <label>
                    Method:
                    <select value={method} onChange={handleMethodChange}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                    </select>
                </label>
                <label>
                    URL:
                    <input
                        type="text"
                        value={url}
                        onChange={handleUrlChange}
                    />
                </label>
            </div>
        </div>
    );

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-trigger` },
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
