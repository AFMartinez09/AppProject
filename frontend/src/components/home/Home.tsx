

// type Props = {}

import TemplateUser from "../forms/formUser/TemplateUser";


const Home = () => {
const submit = (data: any) => {
  console.log(data)
}
  return (
    <div>
      <TemplateUser
        handleSubmit={submit}
      >Nuevo usuario</TemplateUser>
    </div>
  );
};

export default Home;
