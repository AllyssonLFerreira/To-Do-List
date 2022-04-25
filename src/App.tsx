import { useState } from 'react';
import { Item } from './Types/Item';
import { ListItem } from './Components/ListItem';
import { AddArea } from './Components/AddArea';

import {Container, Area, Header} from './App.styles'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Tentar Dominar o Mundo!', done: false },
    { id: 2, name: 'Pegar a Pantera Cor de Rosa!', done: true }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id:number, done:boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id ) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header> Minha Lista de Tarefas! </Header>
        
        <AddArea onEnter= {handleAddTask} />
      
        {list.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item} 
            onChange={handleTaskChange}/>
        ))}

      </Area>
    </Container>
  )
};

export default App;
