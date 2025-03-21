/* eslint-disable react/prop-types */
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="loading loading-ring loading-sm"></span>
      ) : (
        text
      )}
    </button>
  )
}
export default SubmitBtn
