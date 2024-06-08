interface userProfile{
    firstname:string;
    lastname:string;
    age? :number;
    isDuePayment:boolean

}

const Profile:React.FC<userProfile> = ({firstname,lastname,age,isDuePayment}) =>{
    let fullname = firstname + " " + lastname;
  return (
    <>
    <h1>{fullname}</h1>
    {age && <div>Age:{age}</div>}
    <p>Due Payment Status: {isDuePayment?"Verified":"Non-verified"}</p>
    </>
  )
}
export default Profile