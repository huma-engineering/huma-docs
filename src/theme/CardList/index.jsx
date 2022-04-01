import React, { useState, useEffect } from 'react';
import Card from './Card';
import Select from '../../components/Select'
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function CardList({ items, cols, learnMore, filters }) {

  const [selectedFilter, setSelectedFilter] = useState([])

  useEffect(() => {
    console.log(selectedFilter)
  }, [selectedFilter])

  const onFilterChange = (selected, currentFilter) => {
    setSelectedFilter(current => ({ ...current, [currentFilter.key]: selected.map(s => s.value) }))
  }

  const generateFilters = () => {
    let filterList = [...filters]

    filterList = filterList.map(filter => {
      const options = []

      items.forEach((item) => {
        item.filters[filter.key]?.map((elm) => {
          if (options.indexOf(elm) == -1) options.push(elm)
        })

      })

      return { ...filter, options: options.map(elm => ({ value: elm, label: elm })) }
    })

    return filterList.map((item, i) => (
      <div key={`fs-${i}`}>
        <Select
          isMulti
          onChange={e => { onFilterChange(e, item) }}
          placeholder={item.label}
          options={item.options}
        />
      </div>
    ))
  }

  const renderItems = () => {

    let filtered = []

    if (Object.keys(selectedFilter).length) {
      filtered = items.filter(item => {

        let count = 0
        let scount = 0

        Object.keys(selectedFilter).map((k) => {
          if (selectedFilter[k].length) scount++
        })

        if (!item.filters || scount == 0) return true

        Object.keys(item.filters).map(key => {
          if (selectedFilter[key]?.length) {
            let oneFound = false

            item.filters[key].map((sk) => {
              if (selectedFilter[key].indexOf(sk) != -1) {
                oneFound = true
              }
            })

            if (oneFound) count++
          }
        })

        return count == scount
      })

    } else {
      filtered = [...items]
    }

    return filtered.length ?
      filtered.map((item, index) => (
        <article key={index} className={`col col--${12 / cols} pb-2`}>
          <Card item={item} learnMore={learnMore} />
        </article>
      ))
      :
      <div className={`${styles.notFound} col`}>
        <span>
          {
            translate(
              {
                message: 'Not Found',
                id: 'theme.docs.Card.notFound',
              })
          }
        </span>
      </div>
  }

  return (
    <>
      <div className="row pb-2">
        <div className={`col ${styles.filter}`}>
          <div className={`${styles.filterLabel}`}>
            {translate(
              {
                message: 'Filter by',
                id: 'theme.docs.Card.filterBy',
              })}:
          </div>
          <div className={`${styles.filterSelects}`}>
            {generateFilters()}
          </div>
        </div>
      </div>
      <div className="row">
        {renderItems()}
      </div>
    </>
  );
}
