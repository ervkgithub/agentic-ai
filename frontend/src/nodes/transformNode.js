// transformNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TransformNode = ({ id, data }) => {
    const [transformType, setTransformType] = useState(data.transformType || 'Map');

    const handleTypeChange = (e) => {
        setTransformType(e.target.value);
    };

    const content = (
        <div className="transform-node-content">
            <div className="node-header">
                <span>Transform</span>
            </div>
            <div className="node-body">
                <label>
                    Type:
                    <select value={transformType} onChange={handleTypeChange}>
                        <option value="Map">Map</option>
                        <option value="Reduce">Reduce</option>
                        <option value="Filter">Filter</option>
                        <option value="Sort">Sort</option>
                    </select>
                </label>
            </div>
        </div>
    );

    const handles = [
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` }
    ];

    return (
        <BaseNode
            id={id}
            content={content}
            handles={handles}
        />
    );
}
