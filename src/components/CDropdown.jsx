import React from 'react'

const CDropdown = () => {
  return (
      <div>
          <li class="dropdown">
              <a class="f_Montserrat fw_400 fs_16 text-white dropdown-toggle text-decoration-none" href="#"
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Eng
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">HINDI</a></li>
                  <li><a class="dropdown-item" href="#">SPANISH</a></li>
              </ul>
          </li>
    </div>
  )
}

export default CDropdown