import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div>
      <div style={{ margin: 10 }}>
        <Input
          placeholder="todo info"
          style={{ width: 300, marginRight: 10 }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button
          type="primary"
          onClick={props.handleButtonClick}
        >Submit</Button>
      </div>
      <List
        bordered
        style={{ width: 300, margin: 10 }}
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={props.handleDeleteTodo.bind(null, index)}>{item}</List.Item>
        )}
      />
    </div>
  )
}

export default TodoListUI
