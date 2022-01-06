import { useQuery } from '@apollo/client';

export const withQuery =
  (Component: any) =>
  ({ variables, gql, props }: any) => {
    const { loading, error, data } = useQuery(gql, {
      variables,
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error! {JSON.stringify(error?.networkError)}</p>;

    return <Component data={data} {...props} />;
  };
