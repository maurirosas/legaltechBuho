import React from "react";
import { Chat__messageComponent } from "./Chat__message";
import { Chat__messages } from "../../styles/Chat.styled";

export const Chat__messagesComponent = () => {
  return (
    <Chat__messages>
      <Chat__messageComponent
        text="BÚHO, necesito que me ayudes con un caso de estafa que estoy llevando. El cliente alega que fue víctima de una empresa que lo engañó vendiéndole productos falsificados. ¿Cómo debería abordar este caso? ¿Cuáles son los pasos iniciales y qué leyes debo considerar?"
        isUser={true}
      />
      <Chat__messageComponent
        text="Entendido, abogado. Para comenzar, en un caso de estafa, es crucial asegurarse de que se cumplan todos los elementos del delito. Según el Código Penal Boliviano, el delito de estafa está tipificado en el artículo 335, que establece lo siguiente:
          1.- La estafa implica un engaño, que puede ser realizado por medio de falsificación de documentos, uso de información............"
        isUser={false}
      />
    </Chat__messages>
  );
};
