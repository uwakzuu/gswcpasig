import { useState } from "react"
import { FaMapMarkerAlt, FaSpinner } from "react-icons/fa"

export default function NearestBranchFinder({ branches }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [nearestBranch, setNearestBranch] = useState(null)
  const [userLocation, setUserLocation] = useState(null)

  const calculateDistance = (coord1, coord2) => {
    const R = 6371
    const dLat = (coord2.lat - coord1.lat) * (Math.PI / 180)
    const dLng = (coord2.lng - coord1.lng) * (Math.PI / 180)
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(coord1.lat * (Math.PI / 180)) *
        Math.cos(coord2.lat * (Math.PI / 180)) *
        Math.sin(dLng / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const findNearestBranch = (userCoord) => {
    let nearest = branches[0]
    let shortest = calculateDistance(userCoord, nearest.coordinates)

    branches.forEach(branch => {
      const dist = calculateDistance(userCoord, branch.coordinates)
      if (dist < shortest) {
        shortest = dist
        nearest = branch
      }
    })

    return { branch: nearest, distance: shortest }
  }

  const handleFindNearest = () => {
    setIsLoading(true)
    setError(null)

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser")
      setIsLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const userCoord = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        setUserLocation(userCoord)
        console.log(userCoord)

        const { branch } = findNearestBranch(userCoord)
        setNearestBranch(branch)
        setIsLoading(false)
      },
      error => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError("Location permission denied. Please enable location services to use this feature.")
            break
          case error.POSITION_UNAVAILABLE:
            setError("Location information is unavailable.")
            break
          case error.TIMEOUT:
            setError("The request to get your location timed out.")
            break
          default:
            setError("An unknown error occurred while trying to get your location.")
            break
        }
        setIsLoading(false)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  }

  return (
    <div className="bg-[#7EA82C]/10 p-6 rounded-lg">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Find Your Nearest Branch</h3>
        <p className="text-gray-600">Use your current location to find the closest Global Surge Worship Center</p>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleFindNearest}
          disabled={isLoading}
          className="bg-gradient-to-tr from-lime-500 via-lime-500 to-lime-600 hover:from-[#7EA82C] hover:to-[#8BC53F] text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-50 transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          {isLoading ? <FaSpinner className="animate-spin" /> : <FaMapMarkerAlt />}
          {isLoading ? "Finding nearest branch..." : "Find Nearest Branch"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{error}</p>
        </div>
      )}

      {nearestBranch && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Your Nearest Branch:</h4>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-medium text-blue-700">{nearestBranch.name}</p>
              <p className="text-sm text-gray-600">{nearestBranch.address}</p>
            </div>
            <div
                role="button"
                tabIndex={0}
                className="bg-gradient-to-tr from-lime-500 via-lime-500 to-lime-600 hover:from-[#7EA82C] hover:to-[#8BC53F] text-white text-sm px-4 py-2 rounded transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
                onClick={() => window.open(nearestBranch.mapUrl, '_blank', 'noopener,noreferrer')}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                    window.open(nearestBranch.mapUrl, '_blank', 'noopener,noreferrer');
                    }
                }}
                >
                Get Directions
                </div>
          </div>
        </div>
      )}
    </div>
  )
}
