import { Container } from "./style";
import { AiFillFileAdd } from "react-icons/ai";
import { useState, KeyboardEvent  } from "react";

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }:Props) => {
    const [inputText, setInputText] = useState("")

    const handleKeyUp = (e:KeyboardEvent) =>{
        if((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '' ) {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <Container>
            <div className="image"> <AiFillFileAdd /> </div>
            <input 
                type= "text"
                placeholder= "Adicione uma tarefa"
                value= {inputText}
                onChange= {e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />    
        </Container>
    )
}
