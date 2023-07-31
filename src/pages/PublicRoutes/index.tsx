import { Outlet } from "react-router-dom"
import DefaultTemplate from "../../components/Templates/DefaultTemplate"

const PublicRoutes = () => {
  return (
    <DefaultTemplate>
        <Outlet />
    </DefaultTemplate>
  )
}

export default PublicRoutes