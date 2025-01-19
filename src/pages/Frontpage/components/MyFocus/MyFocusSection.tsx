import React from "react";
import { JavaIcon, NodeIcons, PostgresIcon, KubernetesIcon, PythonIcon, DatabricksIcon } from "../../styles";

const MyFocusSection: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <JavaIcon />
          <p>Java</p>
        </li>
        <li>
          <KubernetesIcon />
          <p>Kubernetes</p>
        </li>
        <li>
          <PostgresIcon />
          <p>Postgres</p>
        </li>
        <li>
          <NodeIcons />
          <p>NodeJS</p>
        </li>
        <li>
          <PythonIcon />
          <p>Python</p>
        </li>
        <li>
          <DatabricksIcon/>
          <p>Databricks</p>
        </li>
      </ul>
    </>
  );
}

export default MyFocusSection;