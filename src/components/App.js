import React,{Component} from 'react'
import QuestionList from './quiz/QuestionList'
import ScoreBox from './quiz/ScoreBox'
import Results from './quiz/Results'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is your name?',
					choices: [
						{
							id: 'a',
							text: 'Mike'
						},
						{
							id: 'b',
							text: 'Adam'
						},
						{
							id: 'c',
							text: 'John'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'What is pets name?',
					choices: [
						{
							id: 'a',
							text: 'Chomper'
						},
						{
							id: 'b',
							text: 'Brutus'
						},
						{
							id: 'c',
							text: 'Pup'
						}
					],
					correct: 'a'
				},
				{
					id: 3,
					text: 'What is favorite animal?',
					choices: [
						{
							id: 'a',
							text: 'Dog'
						},
						{
							id: 'b',
							text: 'Cat'
						},
						{
							id: 'c',
							text: 'Pig'
						}
					],
					correct: 'c'
				}									
			],
			score: 0,
			current: 1
		}
	}

	setCurrent(current) {
		this.setState({current})
	}

	setScore(score) {
		this.setState({score})
	}

	render() {
		if(this.state.current > this.state.questions.length) {
			var scoreBox = ''
			var results = <Results {...this.state} />
		} else {
			var scoreBox = <ScoreBox {...this.state}/>
			var results = ''
		}
		return (
			<div>
				{scoreBox}
				<QuestionList 
					{...this.state} 
					setCurrent={this.setCurrent.bind(this)}
					setScore={this.setScore.bind(this)}
				/>
				{results}
			</div>
		)
	}
}