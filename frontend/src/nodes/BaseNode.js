// BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, content, handles = [], style = {}, className = '' }) => {
    return (
        <div className={`custom-node ${className}`} style={{ ...style, height: '100%' }}>
            {handles.map((handle, index) => (
                <Handle
                    key={`${id}-${index}`}
                    type={handle.type}
                    position={handle.position}
                    id={handle.id || `${id}-handle-${index}`}
                    style={handle.style}
                    className="custom-handle"
                />
            ))}
            <div className="node-content">
                {content}
            </div>
        </div>
    );
};
