import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import React from 'react'

const NotFoundComponent = () => {
    return (
        <Result
            title="Start Adding Task"
            icon={<PlusCircleOutlined />}

            extra={
                <Button type="primary" key="console">
                    Create To do
                </Button>
            }
        />
    );
}

export default NotFoundComponent
