import React from 'react';

interface WatchState {
  time: Date;
}

class Watch extends React.Component<Record<string, never>, WatchState> {
  private timer: number | null = null;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timer = window.setInterval(
      () => this.setState({ time: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    if (this.timer) window.clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;
    return (
      <div className="text-white text-xl px-2">
        {time.toLocaleTimeString()}
      </div>
    );
  }
}

export default Watch;