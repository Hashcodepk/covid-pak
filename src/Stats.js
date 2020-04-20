import React, { Component } from 'react';
import './Stats.css';


class Stats extends Component {
	
				
			
	render(){
		const date = new Date(this.props.data.time);
 		var time = date.toLocaleTimeString();
		return(
			<div className = 'tc'>
			<div className=''>
				<img alt='img' src="http://covid.gov.pk/theme_img/core-img/Corona-Logo2.gif"/>
			</div>
			<div className='fl w-100 tc flex justify-center'>
				<div className='fl w-40 b-grey dim pointer bg-washed-red br3 pa2 bw2 ma2 shadow-5'>
					<div className='fl w-100 head'>Confirmed Cases</div>
					<div className='fl w-100'><span className='confirm'>{this.props.data.cases.total}</span></div>
				</div> 
			</div>
			<div className='fl w-100 tc flex justify-center'>
				<div className='fl w-30 b-grey dim pointer bg-light-yellow br3 pa2 bw2 ma2 shadow-5'>
					<div className='fl w-100 stat-head pt1 a-c'>Active Cases</div>
					<div className='fl w-100'><span className='stat a-c'>{ this.props.data.cases.active }</span></div>
				</div>
				<div className='fl w-30 b-grey dim pointer bg-light-green br3 pa2 bw2 ma2 shadow-5'>
					<div className='fl w-100 stat-head pt1 rec'>Recovered</div>
					<div className='fl w-100'><span className='stat rec'>{this.props.data.cases.recovered}</span></div>
				</div>
			</div>
			<div className='fl w-100 tc flex justify-center'>
				<div className='fl w-30 b-grey dim pointer ctl-background br3 pa2 bw2 ma2 shadow-5'>
					<div className='fl w-100 stat-head pt1 ctl'>Critical</div>
					<div className='fl w-100'><span className='stat ctl'>{this.props.data.cases.critical}</span></div>
				</div>
				<div className='fl w-30 b-grey dim pointer dts-background br3 pa2 bw2 ma2 shadow-5'>
					<div className='fl w-100 stat-head pt1 dts'>Total Deaths</div>
					<div className='fl w-100'><span className='stat dts'>{this.props.data.deaths.total}</span></div>
				</div>
			</div>
			<div className='fl w-100 tc flex justify-center'>
				<div className='fl w-30 b-grey dim pointer c24-background br3 pa2 bw2 ma2 shadow-5'>
					<div className='fl w-100 stat-head-24 pt1 c24'>24h</div>
					<div className='fl w-100 stat-head  c24'>Cases</div>
					<div className='fl w-100'><span className='stat c24'>{this.props.data.cases.new}</span></div>
				</div>
				<div className='fl w-30 b-grey dim pointer d24-background br3 pa2 bw2 ma2 shadow-5'>
					<div className='fl w-100 stat-head-24 pt1 d24'>24h</div>
					<div className='fl w-100 stat-head  d24'>Deaths</div>
					<div className='fl w-100'><span className='stat d24'>{this.props.data.deaths.new}</span></div>
				</div>
			</div>
			<div className='fl w-100 tc flex justify-center'>
				<div className='fl w-30 b-grey dim pointer tt-background br3 pa2 bw2 ma2 shadow-5'>
					<div className='fl w-100 stat-head pt1 tt'>Total Tests</div>
					<div className='fl w-100'><span className='stat tt'>{this.props.data.tests.total}</span></div>
				</div>
			</div>
			
			<div className='fl w-100 tc flex justify-center'>
				<div className='fl w-30 dim pointer pa2 ma2'>
					<div className='fl w-100 stat-head-update'>Updated On</div>
					<div className='fl w-100'><span className='stat-update'>{time.toString()}</span></div>
				<div className='fl w-100'><span className='stat-update-date'>{this.props.data.day}</span></div>
				</div> 
			</div>
	</div>
			);
	}

}
export default Stats;