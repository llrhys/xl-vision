import { mount } from 'enzyme'
import * as React from 'react'
import Col from '../col'
import Row from '../row'

describe('栅格系统', () => {
  it('基本用法', () => {
    const wrapper = mount(
      <div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={4}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={5}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={7}>
              <div className='grid-col-box'>col3</div>
            </Col>
            <Col span={8}>
              <div className='grid-col-box'>col4</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col4</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={8}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={0}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={8}>
              <div className='grid-col-box'>col3</div>
            </Col>
            <Col span={8}>
              <div className='grid-col-box'>col4</div>
            </Col>
          </Row>
        </div>
      </div>
    )
    expect(wrapper).toMatchSnapshot()
    // wrapper.unmount()
  })
  it('偏移布局', () => {
    const wrapper = mount(
      <div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6} offset={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6} push={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6} pull={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col4</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={6} offset={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6} pull={12}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col4</div>
            </Col>
          </Row>
        </div>
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('响应式布局', () => {
    const wrapper = mount(
      <div className='grid-row-box'>
        <Row
          gutter={{ xs: 8, sm: 10, md: 15, lg: 20, xl: 25, xxl: 30 }}
        >
          <Col
            span={{ xs: 8, sm: 6, md: 4, lg: 6 }}
          >
            <div className='grid-col-box'>col1</div>
          </Col>
          <Col
            span={{ xs: 8, sm: 6, md: 5, lg: 10, xxl: 6 }}
          >
            <div className='grid-col-box'>col2</div>
          </Col>
          <Col
            span={{ xs: 8, sm: 6, md: 7, lg: 4, xl: 0, xxl: 6 }}
          >
            <div className='grid-col-box'>col3</div>
          </Col>
          <Col
            span={{ xs: 0, sm: 6, md: 8, lg: 4, xl: 8, xxl: 6 }}
          >
            <div className='grid-col-box'>col4</div>
          </Col>
        </Row>
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('响应式偏移', () => {
    const wrapper = mount(
      <div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col
              span={6}
              offset={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
            >
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col
              span={6}
              push={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
            >
              <div className='grid-col-box'>col3</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box'>
          <Row gutter={10}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col
              span={6}
              pull={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
              offset={6}
            >
              <div className='grid-col-box'>col3</div>
            </Col>
          </Row>
        </div>
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('flex布局', () => {
    const wrapper = mount(
      <div>
        <div className='grid-row-box grid-row-box--flex'>
          <Row gutter={10} type={'flex'} align={'top'}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col4</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box grid-row-box--flex'>
          <Row gutter={10} type={'flex'} align={'middle'}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col4</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box grid-row-box--flex'>
          <Row gutter={10} type={'flex'} align={'bottom'}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col4</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box grid-row-box--flex'>
          <Row gutter={10} type={'flex'} justify={'start'}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box grid-row-box--flex'>
          <Row gutter={10} type={'flex'} justify={'center'}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box grid-row-box--flex'>
          <Row gutter={10} type={'flex'} justify={'end'}>
            <Col span={6}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6}>
              <div className='grid-col-box'>col3</div>
            </Col>
          </Row>
        </div>
        <div className='grid-row-box grid-row-box--flex'>
          <Row gutter={10} type={'flex'}>
            <Col span={6} order={3}>
              <div className='grid-col-box'>col1</div>
            </Col>
            <Col span={6} order={1}>
              <div className='grid-col-box'>col2</div>
            </Col>
            <Col span={6} order={2}>
              <div className='grid-col-box'>col3</div>
            </Col>
          </Row>
        </div>
      </div>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
