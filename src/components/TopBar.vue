<template>
  <div class="top-bar py-1 bgPrimary">
        <div class="container">
          <div class="d-flex">
            <div class="d-flex align-items-center">
              <a href="" class="text-white" style="font-size: 25px"
                ><i class="fa-brands fa-square-facebook"></i
              ></a>
              <button class="login-btn ms-4 ">Email Login</button>
            </div>
            <div class="ms-auto">
              <div class="right-top d-flex justify-content-between ">
                <div class="d-flex align-items-center">
                  <a href="" class="text-white" style="font-size: 25px"
                    ><i class="fa-solid fa-phone"></i
                  ></a>
                  <h6 class="mt-2 ms-3">025-534344</h6>
                </div>
                <div class="d-flex align-items-center">
                  <a href="" class="text-white" style="font-size: 25px"
                    ><i class="fa-solid fa-envelope"></i
                  ></a>
                  <h6 class="mt-2 ms-3">info@cct.tu.edu.np</h6>
                </div>
                <div class="d-flex align-items-center">
                  <button class="login-btn"><span style="color: #F8FF01">Apply</span> Online</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>
.login-btn {
  font-weight: 700;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  font-size: 12px;
  border-radius: 5px;
  padding: 0 10px;
  height: 30px;
}
.right-top {
  /* background-color: red; */
  width: 30vw;
}
h6{
 color: white;
 font-size: 16px;
}
</style>