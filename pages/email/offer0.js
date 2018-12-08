import { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import GanttJS from 'frappe-gantt-codeelves'
import { bind, clear } from 'size-sensor'

const noop = function functionName() {}

class ReactGantt extends Component {
  ganttRef = undefined;

  componentDidMount() {
    this.renderFrappeGanttDOM();
  };

  // redraw the gantt when update. now change the viewMode
  componentDidUpdate(prevProps, prevState) {
    if (this.ganttInst) {
      this.ganttInst.refresh(this.props.tasks);
      // 不相等才刷新
      if (this.props.viewMode !== prevProps.viewMode) {
        this.ganttInst.change_view_mode(this.props.viewMode);
      }
    }
  }

  componentWillUnmount() {
    clear(this.ganttRef);
  }

  /**
   * render the gantt chart
   * @returns {GanttJS}
   */
  renderFrappeGanttDOM() {
    // init the Gantt
    // if exist, return
    if (this.ganttInst) return this.ganttInst;

    const {
      onClick,
      onDateChange,
      onProgressChange,
      onViewChange,
      customPopupHtml,
      tasks,
      viewMode,
    } = this.props;

    // when resize
    bind(this.ganttRef, () => {
      if (this.ganttInst) {
        this.ganttInst.refresh(this.props.tasks);
      }
    });

    // new instance
    this.ganttInst = new GanttJS(this.ganttRef, tasks, {
      on_click: onClick || noop,
      on_date_change: onDateChange || noop,
      on_progress_change: onProgressChange || noop,
      on_view_change: onViewChange || noop,
      custom_popup_html: customPopupHtml || null
    });
    // change view mode
    this.ganttInst.change_view_mode(viewMode);
    return this.ganttInst;
  };

  render() {
    return (
      <svg ref={ node => { this.ganttRef = node; }} />
    );
  }
};

class Taska extends Component {
  render () {
    var tasks = [{
      id: 'Task 1',
      name: 'Redesign website',
      start: '2016-12-28',
      end: '2016-12-31',
      progress: 20,
      dependencies: 'Task 2, Task 3'
    }]

    return (
      <div>
        <ReactGantt tasks={tasks} />
      </div>
    )
  }
}

export default EmailOffer
