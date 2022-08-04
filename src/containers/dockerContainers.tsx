import React from 'react';
import Container from '../components/container';
import {
  useGetContainersQuery,
  ObjectElement,
  // ContainerResponse,
} from '../services/containerQuery';

// interface Elements {
//   id: string;
//   name: string;
//   state: string;
// }
// interface DataInterface {
//   data: Array<Elements>;
// }

const DockerContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();
  console.log('Data: ', data);
  console.log('Error: ', error);

  // const listOfContainers: React.ReactElement[] = [];
  // if (data) {
  //   for (const el of data) {
  //     listOfContainers.push(<Container containerData:DataInterface={el} />);
  //   }
  // }
  // return (
  //   <div className='docker-container'>
  //     <div>Docker Containers</div>
  //     {error ? (
  //       <>Oh no, there was an error</>
  //     ) : isLoading ? (
  //       <>Loading...</>
  //     ) : data ? (
  //       <>
  //         <div>{listOfContainers}</div>
  //         {/* <div>{data[0]['name']}</div> */}
  //       </>
  //     ) : null}
  //   </div>
  // );
  return (
    <div className='docker-container'>
      <div>Docker Containers</div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((container: ObjectElement) => {
            return (
              <Container
                id={container.id}
                name={container.name}
                state={container.state}
              />
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default DockerContainers;
