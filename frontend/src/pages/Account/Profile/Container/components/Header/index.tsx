import { H1 } from "components"

const ProfileHeader = () => {
  return (
    <header className="flex-between gap-mini align-center profile-padding">
    <div className="profile-img flex gap w-full">
      <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" className="rounded" />
      <section className="flex-col justify-center">
        <div className="flex gap-mini w-full align-center">
          <H1>Hanna Kisel</H1>
          <p className="indicator h-content">Logistator</p>
        </div>
        <span>yakol.nikita@gmail.com</span>
      </section>
    </div>
    <button className="nowrap h-content ">Save Changes</button>
  </header>
  )
}

export default ProfileHeader