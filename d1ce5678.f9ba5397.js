(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(137)),i=n(140),c={id:"running_etl",title:"Running Orion's ETL",sidebar_label:"Running Orion's ETL"},l={id:"running_etl",isDocsHomePage:!1,title:"Running Orion's ETL",description:"This tutorial walks you through Orion's ETL. It shows you how to modify Orion's DAG, collect, enrich and analyse data from Microsoft Academic Graph.",source:"@site/docs/Running the ETL.mdx",permalink:"/docs/running_etl",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Running the ETL.mdx",sidebar_label:"Running Orion's ETL",sidebar:"docs",previous:{title:"Operators",permalink:"/docs/Operators"}},s=[{value:"Get Orion",id:"get-orion",children:[]},{value:"Modify <code>model_config.yaml</code>",id:"modify-model_configyaml",children:[]},{value:"Modify <strong>the environmental variables in <code>.env</code></strong>",id:"modify-the-environmental-variables-in-env",children:[]},{value:"Build the docker container",id:"build-the-docker-container",children:[]},{value:"Run the DAG with Airflow&#39;s UI",id:"run-the-dag-with-airflows-ui",children:[]},{value:"Access the database",id:"access-the-database",children:[{value:"Using <code>psql</code>",id:"using-psql",children:[]},{value:"Using the docker container",id:"using-the-docker-container",children:[]},{value:"Using SQLAlchemy",id:"using-sqlalchemy",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial walks you through Orion's ETL. It shows you how to modify Orion's DAG, collect, enrich and analyse data from Microsoft Academic Graph."),Object(o.b)("h2",{id:"get-orion"},"Get Orion"),Object(o.b)("p",null,"Clone the repository:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/orion-search/orion\n")),Object(o.b)("h2",{id:"modify-model_configyaml"},"Modify ",Object(o.b)("inlineCode",{parentName:"h2"},"model_config.yaml")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"model_config.yaml")," contains Orion's configuration parameters. Change the following: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Database name"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"data:\n    db_name: 'arxiv_cl'\n")),Object(o.b)("p",null,"This is where Orion stores the MAG data."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2. MAG query parameters")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'mag:\n    query_values: [\'arxiv computation and language\']\n    entity_name: \'J.JN\'\n    metadata: ["Id", "Ti", "AA.AfId", "AA.AfN", "AA.AuId", "AA.DAuN", "AA.S", "CC", "D", "F.DFN", "F.FId", "J.JId", "J.JN", "Pt", "RId", "Y", "DOI", "PB", "BT", "IA", "C.CN", "C.CId", "DN", "S"]\n    with_doi: False\n    mag_start_date: \'2020-05-01\'\n    mag_end_date: \'2020-05-30\'\n    intervals_in_a_year: 1\n')),Object(o.b)("p",null,"We will query MAG with ",Object(o.b)("inlineCode",{parentName:"p"},"arxiv computation and language")," and specify that is a journal using the ",Object(o.b)("inlineCode",{parentName:"p"},"J.JN")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"entity_name")," field. ",Object(o.b)("inlineCode",{parentName:"p"},"metadata")," contains all the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/academic-services/project-academic-knowledge/reference-paper-entity-attributes"}),"MAG fields")," that Orion collects. We set the ",Object(o.b)("inlineCode",{parentName:"p"},"mag_start_date")," and ",Object(o.b)("inlineCode",{parentName:"p"},"mag_end_date")," to 2020-05-01 and 2020-05-30 respectively to collect papers published in May 2020. We will collect documents even if they do not have a DOI. We can specify this by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"with_doi")," parameter to ",Object(o.b)("inlineCode",{parentName:"p"},"False"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3. S3 buckets")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'s3_buckets:\n    mag: "cl-mag-data-dump"\n    gender: "cl-names-batches"\n    text_vectors: "cl-document-vectors"\n    topic: "cl-mag-topics"\n')),Object(o.b)("p",null,"Set the S3 buckets that Orion will create and store intermediate data."),Object(o.b)("h2",{id:"modify-the-environmental-variables-in-env"},"Modify ",Object(o.b)("strong",{parentName:"h2"},"the environmental variables in ",Object(o.b)("inlineCode",{parentName:"strong"},".env"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"# postgresdb\narxiv_cl=postgres+psycopg2://postgres:admin@postgres:5432/arxiv_cl\npostgres=postgres+psycopg2://postgres:admin@postgres:5432/postgres\n\n# mag\nmag_api_key=<MAG_API_KEY>\n\n# NOT USED IN THE TUTORIAL\n# google_api_key=<GOOGLE_API_KEY>\n\n# NOT USED IN THE TUTORIAL\n# gender_api=<GENDERAPI_AUTH>\n\n# NOT USED IN THE TUTORIAL\n# es_host=<AWS_ES_ENDPOINT>\n# es_port=<AWS_ES_PORT>\n# es_index=<AWS_ES_INDEX_NAME>\n# region=<AWS_ES_REGION>\n\n# docker-compose.yml ENV variables\nDB_HOST=postgres\nDB_PORT=5432\nDB_USER=postgres\nDB_PASS=admin\nMAIN_DB=arxiv_cl\nDB_NAME=airflow\n\nAWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY_ID>\nAWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY>\nAWS_DEFAULT_REGION=<AWS_DEFAULT_REGION>\n")),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file in the root directory and add the above. Alternatively, you can modify the ",Object(o.b)("inlineCode",{parentName:"p"},".env.example")," file and rename it to ",Object(o.b)("inlineCode",{parentName:"p"},".env"),". ",Object(o.b)("inlineCode",{parentName:"p"},".env")," contains the environmental variables used in Orion. For this tutorial, we define the PostgreSQL databases, the MAG API key, the AWS credentials and the environmental variables used in Docker."),Object(o.b)("p",null,"To run the tutorial, you need to create an ",Object(o.b)("strong",{parentName:"p"},"AWS account")," and get an ",Object(o.b)("strong",{parentName:"p"},"API key for the Microsoft Academic Graph"),". See External Dependencies for details."),Object(o.b)("h2",{id:"build-the-docker-container"},"Build the docker container"),Object(o.b)("p",null,"Orion's ETL runs in a docker container. The ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," has the instructions to create two containers; one for the PostgreSQL database and another one for Orion's data pipeline. Use the following command to ",Object(o.b)("strong",{parentName:"p"},"build")," and ",Object(o.b)("strong",{parentName:"p"},"run")," the containers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up\n")),Object(o.b)("p",null,"This should take some time to run. After the setup, you will receive a stream of messages about the PostgreSQL database and Airflow like the one below. "),Object(o.b)("img",{alt:"docker-compose",src:Object(i.a)("img/airflow-log.png")}),Object(o.b)("p",null,"If you need to make changes in a file after running ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up"),", you should do the following to update the docker container:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up --build\n")),Object(o.b)("h2",{id:"run-the-dag-with-airflows-ui"},"Run the DAG with Airflow's UI"),Object(o.b)("p",null,"Airflow is running locally and you can access it at:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"http://localhost:8080/admin/\n")),Object(o.b)("p",null,"Here, you can see all the DAGs in the ",Object(o.b)("inlineCode",{parentName:"p"},"orion/core/dags")," directory. Turn on the ",Object(o.b)("inlineCode",{parentName:"p"},"tutorial")," DAG and click on it."),Object(o.b)("img",{alt:"Airflow UI",src:Object(i.a)("img/airflow-ui-on.png")}),Object(o.b)("p",null,"You can inspect the DAG in different ways, let's choose the ",Object(o.b)("strong",{parentName:"p"},"Graph View.")," You can see all the tasks and their dependencies in the DAG. Let's list the tasks in the ",Object(o.b)("inlineCode",{parentName:"p"},"tutorial")," DAG:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create Orion's PostgreSQL database and tables."),Object(o.b)("li",{parentName:"ul"},"Create AWS S3 buckets."),Object(o.b)("li",{parentName:"ul"},"Collect four indicators from the World Bank."),Object(o.b)("li",{parentName:"ul"},"Query Microsoft Academic Graph with the configuration parameters we set in step 2."),Object(o.b)("li",{parentName:"ul"},"Parse the Microsoft Academic Graph response and store it in the PostgreSQL database."),Object(o.b)("li",{parentName:"ul"},"Tag open access publications."),Object(o.b)("li",{parentName:"ul"},"Tag non-industry author affiliations."),Object(o.b)("li",{parentName:"ul"},"Collect metadata and calculate statistics on the Fields of Study used in the publications we retrieved."),Object(o.b)("li",{parentName:"ul"},"Assign a set of thematic topics to the academic publications based on their Fields of Study.")),Object(o.b)("img",{alt:"Airflow  DAG",src:Object(i.a)("img/airflow-dag.png")}),Object(o.b)("p",null,"Click on ",Object(o.b)("strong",{parentName:"p"},"Trigger DAG.")," It will run all tasks in the pipeline. The status of the DAG will change to ",Object(o.b)("strong",{parentName:"p"},"running")," and the border of the tasks will turn ",Object(o.b)("strong",{parentName:"p"},"green")," as they are completed successfully."),Object(o.b)("img",{alt:"Sucessful tasks",src:Object(i.a)("img/airflow-successful-tasks.png")}),Object(o.b)("p",null,"The run will be completed once the status of the DAG changes to ",Object(o.b)("strong",{parentName:"p"},"success.")),Object(o.b)("h2",{id:"access-the-database"},"Access the database"),Object(o.b)("p",null,"There are three ways to access the database."),Object(o.b)("h3",{id:"using-psql"},"Using ",Object(o.b)("inlineCode",{parentName:"h3"},"psql")),Object(o.b)("p",null,"If you have ",Object(o.b)("inlineCode",{parentName:"p"},"psql")," installed, type in your terminal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"psql arxiv_cl -h localhost postgres\n")),Object(o.b)("p",null,"You will be prompted to type your password which is ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," (we set it in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file). "),Object(o.b)("h3",{id:"using-the-docker-container"},"Using the docker container"),Object(o.b)("p",null,"If you do not have ",Object(o.b)("inlineCode",{parentName:"p"},"psql"),", do the following to open the the ",Object(o.b)("inlineCode",{parentName:"p"},"postgres")," container in interactive mode:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it postgres psql -U postgres arxiv_cl\n")),Object(o.b)("h3",{id:"using-sqlalchemy"},"Using SQLAlchemy"),Object(o.b)("p",null,"This is the most useful way if you plan to use the data in your analysis. You can either access the data from the docker container or export the database to your local PostgreSQL distribution. Let's do the latter."),Object(o.b)("p",null,"While the docker container is running, type the following in a separate shell to store the ",Object(o.b)("inlineCode",{parentName:"p"},"arxiv_cl")," database in a ",Object(o.b)("inlineCode",{parentName:"p"},"sql")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -t postgres pg_dump --no-owner -U postgres arxiv_cl > arxiv_cl_dump.sql\n")),Object(o.b)("p",null,"Shut down the container, open your local PostgreSQL distribution and type"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"psql -d arxiv_cl < arxiv_cl_dump.sql\n")),Object(o.b)("p",null,"to load the database dump in a local database named ",Object(o.b)("inlineCode",{parentName:"p"},"arxiv_cl"),". Note that you have to create the local database before loading the dump. You can then use Python's ",Object(o.b)("inlineCode",{parentName:"p"},"SQLAlchemy")," to read the data."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"from sqlalchemy import create_engine\nfrom sqlalchemy.orm import sessionmaker\n\ndb_config = 'postgres+psycopg2://postgres@localhost:5432/arxiv_cl'\nengine = create_engine(db_config)\nSession = sessionmaker(engine)\ns = Session()\n")))}p.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},138:function(e,t,n){"use strict";var a=n(0),r=n(36);t.a=function(){return Object(a.useContext)(r.a)}},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(138),r=n(142);function o(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:o="/",url:i}={}}=Object(a.a)();if(!e)return e;if(t)return o+e;if(!Object(r.a)(e))return e;const c=o+e.replace(/^\//,"");return n?i+c:c}},142:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);