import {useEffect } from 'react';

// Use this hook to change documention title 
const useDocumentTitle = (title) => {
    useEffect(() => {
       document.title = title
    }, [ title])
}
  export default useDocumentTitle