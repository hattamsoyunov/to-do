import React from 'react';

import Button from './Button';

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			running: false,
			elapsed: 0,
			lastTick: 0
		};

		this.handleStart = this.handleStart.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.tick = this.tick.bind(this);
	}

	// componentDidMount() {
		// this.interval = setInterval(this.tick, 1000);
		// console.log('componentDidMount')
	// }

	// componentWillUnmount() {
		// clearInterval(this.interval);
		// console.log('componentWillUnmount')
	// }

	tick() {
		console.log('tick');
		if (this.state.running) {
			const now = Date.now();
			const diff = now - this.state.lastTick;
			console.log('tick rrr');
			this.setState({
				elapsed: this.state.elapsed + diff,
				lastTick: now
			});
		} else {
			clearInterval(this.interval);
		}
	}

	handleStart() {
		this.interval = setInterval(this.tick, 1000);
		
		this.setState({
			running: true,
			lastTick: Date.now()
		});
	}

	handlePause() {
		this.setState({ running: false });
	}

	handleStop() {
		this.setState({
			running: false,
			elapsed: 0,
			lastTick: 0
		});

	}

	format(ms) {
		const totalSeconds = Math.floor(ms / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
	}

	render() {
		const time = this.format(this.state.elapsed);

		return (
			<section className="sopwatch">
				<div className="stopwatch-time">{time}</div>
				<div className="stopwatch-controls">
					{this.state.running ? 
						<Button className="icon" icon="pause" onClick={this.handlePause}/>
						:
						<Button className="icon" icon="play_arrow" onClick={this.handleStart}/>
					}
					<Button className="icon" icon="stop" onClick={this.handleStop}/>
				</div>
			</section>
		);
	}
	
}

export default Stopwatch;