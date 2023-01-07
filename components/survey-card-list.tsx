import SurveyCard from '../components/survey-card';

const cardData: Array<
  React.ComponentProps<typeof SurveyCard> & {
    id: string;
  }
> = [
  {
    id: '123',
    title: '김치찌개 vs 된장찌개',
    choices: [
      {
        text: '김치찌개',
        percent: 70,
        isOpen: true,
        isSelected: true,
      },
      {
        text: '된장찌개',
        percent: 30,
        isOpen: true,
        isSelected: false,
      },
    ],
    tags: ['밸런스게임'],
    createdBy: {
      id: 3,
      name: '제로',
    },
  },
  {
    id: 'asdb',
    title: '혈액형 / MBTI 성격 유형',
    subTitle: '혈액형',
    numQuestions: 2,
    choices: [
      {
        text: 'A',
        percent: 35,
        isOpen: true,
        isSelected: false,
      },
      {
        text: 'B',
        percent: 27,
        isOpen: true,
        isSelected: false,
      },
      {
        text: 'O',
        percent: 33,
        isOpen: true,
        isSelected: false,
      },
      {
        text: 'AB',
        percent: 5,
        isOpen: true,
        isSelected: true,
      },
    ],
    tags: ['MBTI', '혈액형'],
    createdBy: null,
  },
];

export default function SurveyCardList() {
  return (
    <>
      {cardData.map(({ id, ...props }) => (
        <SurveyCard {...props} key={id} />
      ))}
    </>
  );
}
