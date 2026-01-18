// filterNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const FilterNode = ({ id, data }) => {
    const [condition, setCondition] = useState(data.condition || '');

    const handleConditionChange = (e) => {
        setCondition(e.target.value);
    };

    const content = (
        <div className="filter-node-content">
            <div className="node-header">
                <span>Filter</span>
            </div>
            <div className="node-body">
                <label>
                    Condition:
                    <input
                        type="text"
                        value={condition}
                        onChange={handleConditionChange}
                        placeholder="e.g. x > 5"
                    />
                </label>
            </div>
        </div>
    );

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-true` },
        { type: 'source', position: Position.Bottom, id: `${id}-false` }
    ];

    return (
        <BaseNode
            id={id}
            content={content}
            handles={handles}
        />
    );
}
