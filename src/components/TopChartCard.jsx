
const TopChartCard = ({song,i}) => {
  return (
    <div className="flex w-full items-center rounded-lg cursor-pointer mb-2 py-2 p-4 hover:bg-[#4c426e]">
        {song.title}
    </div>
  )
}

export default TopChartCard