// styled components
import * as S from './Answers.styles';
import { Divider } from '../UI/Divider';
import { Heading } from '../UI/Heading';

// custom hooks
import useForm from '../../hooks/useForm';

// data
import options from '../../data/options';
import titles from '../../data/titles';

// animations
import { widthAnim } from '../../animations/animations';

// props type
type AnswersProps = {
  index: number;
};

const Answers = ({ index }: AnswersProps) => {
  const [state] = useForm();

  const isSelected = (id: string) => state.checkedOptions.indexOf(id) > -1;

  return (
    <>
      <S.Wrapper>
        <Heading as='h2' marginBottom={2} size='small'>
          {titles[index].title}
        </Heading>

        <S.List>
          {options
            .filter((option) => option.forQuestion === index)
            .map((option) => (
              <S.Item key={option.id}>
                <S.Text isSelected={isSelected(option.id)}>{option.questionText}</S.Text>

                <S.PercentageBar
                  animate='show'
                  initial='hidden'
                  isSelected={isSelected(option.id)}
                  variants={widthAnim(option.percentAnswered)}
                />
              </S.Item>
            ))}
        </S.List>
      </S.Wrapper>

      <Divider />
    </>
  );
};

export default Answers;
