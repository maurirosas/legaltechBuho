import styled from 'styled-components';

// Contenedor principal del efecto de escritura
export const TextTypeContainer = styled.div`
  display: inline-block;
  white-space: pre-wrap;
`;

// Span que contiene el texto que se está escribiendo
export const TextContent = styled.span`
  /* El color se aplicará a través de props de estilo en línea */
`;

// Span para el cursor parpadeante
export const CursorSpan = styled.span`
  margin-left: 0.25rem;
  display: inline-block;
  opacity: 1;
  /* Ocultamos el cursor basado en la prop $hidden */
  display: ${props => (props.$hidden ? 'none' : 'inline-block')};
`;