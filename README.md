### Due to time constraint I have enahanced a previous dashboard which i had created using auth0 authentication - u might find it commented

### if u find some redundancy it is bcz of my old project

### project info - A github users Search engine with pictorial information of their posts/projects

### Project Setup

- Clone the project from Github URL
- Save in a folder - open the file
- open the terminal and enter following commands
- npm install
- npm audit fix --force
- npm start
- if there is any error after npm start
- open package.json and inside scripts -
  replace "start": "react-scripts start" - with "react-scripts --openssl-legacy-provider start"

- once the code is compiled successfully
- open localhost:3000
- login with 3 credentials
  - john@gmail.com (EMPLOYEE) - test123 - Minimum dashboard access
  - amit@marvels.com (USER) - test123 - Additional features with No search engine
  - rohit@finkraft.com (ADMIN)- test123 - Complete dashboard with Search engine

## Additional project informations

- css provided (global styles, styled components)
- folders/files already setup
- all imports included (warnings)
- index.js for easier imports

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from "react-icons/fi";
<FiUsers className="nameOfTheClass"> </FiUsers>;
```

## React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)
