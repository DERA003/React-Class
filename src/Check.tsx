
// let username = "Chidera"
// let isLogged:boolean=true
// function Check () {
//     return(
//     <>
//         <h2>StringCode Limited</h2>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate neque cum incidunt sequi placeat, libero dolore molestiae dignissimos pariatur. Tempore.</p>
//         {username && <p>Welcome: {username}.</p>}

//         <div>
//            {isLogged? <h1>You are welcome {username}</h1>:<h2>Please login...</h2>} 
//         </div>
//     </>
//     )
    
// }

// export default Check;

let username = "Chidera"
let isLogged:boolean=true

function Check() {
    return(
        <>
        <h1>StringCode Limited</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident quod fugiat sint placeat. Error!</p>
        {username && <p><h2>Welcome: {username}.</h2></p>}

        <div>
            {isLogged? <h1>You are Welcome {username}</h1>:<h2>Please Login...</h2>}
        </div>
        </>
    )
}

export default Check