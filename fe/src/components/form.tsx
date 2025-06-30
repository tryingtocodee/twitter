import GeneralButton from "./ui/button"

interface formProps {
    formText : string
    input : Input[]
    formOnClick? : () => any
}

interface Input{
    label : string
    placeholder : string 
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void
    type : string
}

export default function GeneralForm(props : formProps){
    return (
    <form>
        {props.input.map((item , index)=> (
            <div key={index} className="flex flex-col">
                <label className="py-2">{item.label}</label>
                <input type={item.type} placeholder={item.placeholder} onChange={item.onChange} className="px-3 py-2 mb-3 border rounded text-black" />
            </div>
        ))}
        <GeneralButton sizeStyle="sm" varientStyle="primary" text={props.formText}/>
    </form>
    )
}
