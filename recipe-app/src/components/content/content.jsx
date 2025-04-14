import '../content/content.css';

export default function Content(){

    const incredeients =[];

    const incredeientsDisplay = incredeients.map((i) => 
        (<li key={i}>{i}</li>)
    )

    function IncredeientAdded(event){
        event.preventDefault()
        // alert("Added");
        const formData = new FormData(event.currentTarget)
        const newIncredeient = formData.get("incredeient")
        incredeients.push(newIncredeient);
        console.log(incredeients); 
    }

    return(
        <>
            <main className="form-container">
                <form action="" onSubmit={IncredeientAdded}>
                <input type="text" aria-label="Add Incredeient" placeholder="eg: Tomoto" name="incredeient"/>
                <button >Add Incredeint</button>
                </form>

                <ul>
                {incredeientsDisplay}
                </ul>
            </main>
        </>
    )
}