import { useRouter } from 'next/router';

export default function SurveyShow() {
  const router = useRouter();
  const { sid } = router.query;

  return <p>Survey show page: {sid}</p>;
}
