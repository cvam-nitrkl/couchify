/* eslint-disable react/prop-types */
const FormSelect = (props) => {
    const { label, name, list, defaultValue, size } = props
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={`select select-bordered ${size}`}
      >
        {list.map((item) => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })}
      </select>
    </div>
  )
}
export default FormSelect
