import { forwardRef, useRef, useImperativeHandle } from "react"

const SomeComponent = forwardRef((_props, ref) => {
    const localInputRef = useRef()
    
    useImperativeHandle(ref, ()=>{
        return {
            validate: () => {
                if(localInputRef.current.value.length>3){
                    localInputRef.current.value="";
                }
            }
        }
    })

  return (
    <div>
        <p>Insira, no máximo, três caracteres.</p>
        <input type="text" ref={localInputRef} />
    </div>
  )
})

export default SomeComponent