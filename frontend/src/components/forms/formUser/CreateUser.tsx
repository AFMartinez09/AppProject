import TemplateUser from './TemplateUser'


const CreateUser = () => {
  const handleSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div>
      <TemplateUser
        childrenBtn = "Registrarme"
        handleSubmit={handleSubmit}
      >Resgitrar cuenta</TemplateUser>
    </div>
  )
}

export default CreateUser