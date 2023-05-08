import ErrorPage from 'src/components/pages/ErrorPage';

interface Props {
  statusCode: number;
}
function Error({ statusCode }: Props) {
  return <ErrorPage statusCode={statusCode} />;
}

export default Error;