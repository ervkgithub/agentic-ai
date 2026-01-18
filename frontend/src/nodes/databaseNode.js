// databaseNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const DatabaseNode = ({ id, data }) => {
    const [query, setQuery] = useState(data.query || 'SELECT * FROM users');

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const content = (
        <div className="database-node-content">
            <div className="node-header">
                <span>Database</span>
            </div>
            <div className="node-body">
                <label>
                    Query:
                    <textarea
                        value={query}
                        onChange={handleQueryChange}
                        rows={3}
                        style={{ width: '100%' }}
                    />
                </label>
            </div>
        </div>
    );

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-result` }
    ];

    return (
        <BaseNode
            id={id}
            content={content}
            handles={handles}
        />
    );
}
