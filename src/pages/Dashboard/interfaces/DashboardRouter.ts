export interface DashboardRouter {
    name:string
    path:string,
    page: () => JSX.Element,
    Icon:any
}
