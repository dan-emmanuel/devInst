export const SEARCH_TEXT = 'SEARCH_TEXT';

export const handleChange = (value) => {
    return {
      type: SEARCH_TEXT,
      payload: value
    }
}
