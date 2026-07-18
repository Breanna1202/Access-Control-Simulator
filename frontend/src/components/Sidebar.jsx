import React from "react"
import '../App'

export default function Side() {
  return ( 
<ul className="side">
          <li className="pages"><a title="Dashboard" href=".App.jsx">🏠︎</a></li> 
          <li className="pages"><a title="Endpoints" href="#">⇄</a></li>
          <li className="pages"><a title="Applications" href="#">✉︎</a></li>
          <li className="pages"><a title="Policies" href="#">🛠</a></li>
          <li className="pages"><a title="Logs" href="#">⫶☰</a></li>
          <li className="pages"><a title="Settings" href="#">⛭</a></li>
        </ul>
  );
}