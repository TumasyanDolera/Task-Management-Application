import { Navigate, Route } from "react-router-dom";
import { ChangePassword, Home, SingleUserTask } from "../../pages/index.tsx";
import { ContactUs } from "../../pages/index.tsx";
import { AddTaskToDo } from '../../pages/index.tsx';
import { ProgramerTask } from '../../pages/index.tsx';
import { NotFoundPage, UserProfile } from '../../pages/index.tsx';
import { Layout } from "../../navBar/index.tsx";  

const AuthRoutes = (
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<ContactUs />} />
      <Route path="task" element={<AddTaskToDo />} />
      <Route path="programmertask" element={<ProgramerTask />} />
      <Route path="user">
        <Route index element={<UserProfile />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="programmertask" >
          <Route index element={<ProgramerTask />} />
          <Route path=":id" element={<SingleUserTask />} />
        </Route>
        <Route path="singletask" element={<SingleUserTask />} />
        <Route path="task" element={<AddTaskToDo />} />
      </Route>
    </Route>
    <Route path='/login' element={<Navigate to='/' />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>)

export default AuthRoutes;

