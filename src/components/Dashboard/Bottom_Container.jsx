export default function Bottom_Container() {
  return (
    <div>
      <div className=" flex justify-between my-4">
        <p className=" text-xl font-medium">High Priority alerts(14)</p>
        <p className="  text-blue-800 flex">
          View All
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" mt-1"
          >
            <path
              d="M12.9271 10L7.80751 15.1196L6.79211 14.1042L10.9171 10L6.81295 5.89584L7.82834 4.88044L12.9271 10Z"
              fill="#1A3875"
            />
          </svg>
        </p>
      </div>
      <div className=" flex gap-5">
        <div className=" w-1/2 p-3 bg-white rounded-lg">
          <div className=" flex">
            <div className=" bg-blue-100 p-1 rounded-md flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" my-auto "
              >
                <path
                  d="M9.99893 9.91463C9.04505 9.91463 8.26516 9.61168 7.65926 9.00578C7.05336 8.39987 6.75041 7.61998 6.75041 6.66609C6.75041 5.71222 7.05336 4.93199 7.65926 4.3254C8.26516 3.71882 9.04505 3.41553 9.99893 3.41553C10.9528 3.41553 11.7339 3.71882 12.3421 4.3254C12.9504 4.93199 13.2545 5.71222 13.2545 6.66609C13.2545 7.61998 12.9504 8.39987 12.3421 9.00578C11.7339 9.61168 10.9528 9.91463 9.99893 9.91463ZM3.20874 16.8562V14.7644C3.20874 14.215 3.34704 13.7425 3.62364 13.3469C3.90023 12.9512 4.25741 12.6508 4.69516 12.4454C5.63235 12.0254 6.53294 11.7105 7.39693 11.5005C8.26093 11.2905 9.12816 11.1855 9.99862 11.1855C10.8754 11.1855 11.7421 11.2939 12.5985 11.5109C13.4549 11.7278 14.3495 12.0407 15.2823 12.4495C15.739 12.6522 16.1054 12.9507 16.3817 13.3452C16.658 13.7396 16.7962 14.2123 16.7962 14.7631V16.8562H3.20874ZM4.62812 15.4368H15.3718V14.7833C15.3718 14.5632 15.3058 14.3534 15.1739 14.1537C15.0419 13.9541 14.8787 13.8062 14.6843 13.7099C13.8087 13.2893 13.007 13.0008 12.2792 12.8444C11.5514 12.688 10.7908 12.6098 9.99749 12.6098C9.21078 12.6098 8.44492 12.688 7.69991 12.8444C6.95489 13.0008 6.1539 13.2891 5.29693 13.7092C5.10105 13.8054 4.94062 13.9535 4.81562 14.1532C4.69062 14.353 4.62812 14.563 4.62812 14.7833V15.4368ZM9.99893 8.49526C10.528 8.49526 10.9654 8.32258 11.3113 7.97721C11.6572 7.63187 11.8301 7.19455 11.8301 6.66526C11.8301 6.1346 11.6575 5.69689 11.3123 5.35211C10.9671 5.00732 10.53 4.83492 10.001 4.83492C9.47191 4.83492 9.03445 5.0074 8.68857 5.35234C8.34271 5.69727 8.16978 6.13409 8.16978 6.6628C8.16978 7.19287 8.34238 7.63079 8.68757 7.97657C9.03275 8.32236 9.46987 8.49526 9.99893 8.49526Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className=" flex-grow">
              <p className=" text-black font-medium pl-2">
                Driver Raised Concern
              </p>
              <p className=" text-gray-500 text-xs pl-2">
                Load No. 12454, Bill To: RoaDo demo Bangalore
              </p>
            </div>
            <div>
              <p className=" text-base text-gray-600">13 Feb 24</p>
            </div>
          </div>
          <p className=" text-sm my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            modi optio ipsam nemo voluptatum autem quis tenetur maiores
            excepturi perferendis, enim maxime iusto labore.
          </p>
          <div className=" flex justify-end">
            <div className=" w-1/2"></div>
            <div className=" w-1/2 flex justify-between">
              <p className=" text-lg underline text-blue-800 pl-4 pt-2">
                Ignore
              </p>
              <button className=" bg-blue-800 text-white p-2 rounded-lg">
                Resolve
              </button>
            </div>
          </div>
        </div>
        <div className=" w-1/2 p-3 bg-white rounded-lg">
          <div className=" flex">
            <div className=" bg-blue-100 p-1 rounded-md flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" my-auto"
              >
                <path
                  d="M10.0007 18.3346C8.84787 18.3346 7.86523 17.9284 7.05273 17.1159C6.24023 16.3034 5.83398 15.3207 5.83398 14.168C5.83398 13.5013 5.97982 12.8798 6.27148 12.3034C6.56315 11.727 6.97287 11.2374 7.50065 10.8346V4.16797C7.50065 3.47352 7.74371 2.88325 8.22982 2.39714C8.71593 1.91102 9.30621 1.66797 10.0007 1.66797C10.6951 1.66797 11.2854 1.91102 11.7715 2.39714C12.2576 2.88325 12.5007 3.47352 12.5007 4.16797V10.8346C13.0284 11.2374 13.4382 11.727 13.7298 12.3034C14.0215 12.8798 14.1673 13.5013 14.1673 14.168C14.1673 15.3207 13.7611 16.3034 12.9486 17.1159C12.1361 17.9284 11.1534 18.3346 10.0007 18.3346ZM9.16732 9.16797H10.834V8.33463H10.0007V7.5013H10.834V5.83464H10.0007V5.0013H10.834V4.16797C10.834 3.93186 10.7541 3.73394 10.5944 3.57422C10.4347 3.4145 10.2368 3.33464 10.0007 3.33464C9.76454 3.33464 9.56662 3.4145 9.4069 3.57422C9.24718 3.73394 9.16732 3.93186 9.16732 4.16797V9.16797Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className=" flex-grow">
              <p className=" text-black font-medium pl-2">
                Reefer Temp. out of range
              </p>
              <p className=" text-gray-500 text-xs pl-2">
                Load No. 12454, Bill To: RoaDo demo Bangalore
              </p>
            </div>
            <div>
              <p className=" text-base text-gray-600">13 Feb 24</p>
            </div>
          </div>
          <p className=" text-sm my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            modi optio ipsam nemo voluptatum autem quis tenetur maiores
            excepturi perferendis, enim maxime iusto labore.
          </p>
          <div className=" flex justify-end">
            <div className=" w-1/2"></div>
            <div className=" w-1/2 flex justify-between">
              <p className=" text-lg underline text-blue-800 pl-4 pt-2">
                Ignore
              </p>
              <button className=" bg-blue-800 text-white p-2 rounded-lg">
                Resolve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
