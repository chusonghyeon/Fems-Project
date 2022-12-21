# Fems-Projectv1.0(1차버전: 2022.12.13)
## 🌟 서비스소개 
<img src="https://user-images.githubusercontent.com/50833458/207236100-b9a690b8-b4a2-45e6-9e4d-9f0cf71b85c4.png" width="200" height="200"/>
 AWS를 이용한 FEMS Monitoring web Service 

배포:

## 개발 배경

### 사용한 기술 스택

<p align="center">
<!-- 	<img src="https://img.shields.io/badge/표시할이름-색상?style=for-the-badge&logo=기술스택아이콘&logoColor=white"> -->
	<img src="https://img.shields.io/badge/React-v18.2.0-61DAFB?style=flat&logo=React&logoColor=blue" />
	<img src="https://img.shields.io/badge/TailwindCSS-v3.0.19-1572B6?style=flat&logo=TailwindCSS&logoColor=blue" />
	<img src="https://img.shields.io/badge/styledcomponents-v6.0.0-brown?style=flat&logo=styledcomponents&logoColor=pink" />
	<img src="https://img.shields.io/badge/Syncfusion-v19.4.52-464964?style=flat&logo=Syncfusion&logoColor=blue" />
	<img src="https://img.shields.io/badge/aws S3-orange?logo=amazon"/>
    	<img src="https://img.shields.io/badge/aws Ec2-orange?logo=amazon"/>
	<img src="https://img.shields.io/badge/MariaDB-v10.6.7-white?logo=MariaDB"/>
    	<img src="https://img.shields.io/badge/FastApi-v3.10-green?logo=FastAPI">
	<img src="https://img.shields.io/badge/SQLAlchemy-v1.4.44-white?logo=SQLAlchemy">
	<img src="https://img.shields.io/badge/Uvicorn-v0.19.0-rainbow?logo=Uvicorn">
    	<img src="https://img.shields.io/badge/Docker-v20.10.21-blue?logo=Docker">									
</p>

## 🌟 주요기능

### 👌 로그인

<p align='center'>
  <img src="https://user-images.githubusercontent.com/50833458/207256402-a820780d-f67a-4cc1-80ee-e7f8ca3e084f.PNG" width="700" height="500"/>
</p>

* 백엔드에 있는 jwtToken 인증을 통해 로그인 할 수 있습니다.
* 데이터 베이스에 있는 로그인 계정과 비밀번호로 메인 페이지 접속할 수 있습니다.

### 👌 메인 페이지

<p align="center">
	<img width="700px" height="400px" src="https://user-images.githubusercontent.com/50833458/207275991-0dd6dcf1-9204-4c24-88bd-7d55f185d823.PNG"/>
</p>

* 전반적인 FEMS 서비스를 볼 수 있습니다.
* 메인에 있는 로고를 클릭하면 전력예측 페이지로 이동합니다.

<p align="center">
	<img width="700px" height="400px" src="https://user-images.githubusercontent.com/50833458/207267048-dfd275db-a8e7-4449-8889-a4a5b77ba8ae.PNG"/>
</p>



* 전년도 대비 전력량과 예상 전력 소비량 페이지 입니다.
* 머신러닝으로 예측모델을 적용하여 전력량을 예측을 보여 줄 수 있습니다.
* 2021년도 2022년도 전력소비량도 비교하여 보여줍니다.

#### 🧐 설비정보

<p align="center">
	<img width="700px" height="400px" src="https://user-images.githubusercontent.com/50833458/207272972-b1d68aa4-a1f7-4b15-9d32-807b334a4d27.PNG"/>
</p>


* 공조기 번호, 장소, 클린룸, 전압, 전력, 인버터 갯수를 확인 할 수 있습니다
* 원하는 공조기를 검색으로도 찾을 수 있습니다.

#### 🧐 각 카테고리별 데이터 시각화(전력량, 온도, 습도)

<p align="center">
	<img width="700px" height="400px" src="https://user-images.githubusercontent.com/50833458/207273309-3f0f9f6b-3b18-4641-a6b2-e98041041e0d.PNG"/>
</p>

* 전력량을 보여주는 페이지 입니다.

* 조회일자를 선택하여 검색하면 해당하는 일자로 전력량을 확인 할 수 있습니다.


<p align="center">
	<img width="700px" height="400px" src="https://user-images.githubusercontent.com/50833458/207274185-bf56b225-d8e0-4c9d-96bc-6caf4c3d0dd5.PNG"/>
</p>

* 온도를 보여주는 페이지입니다.

* 공조기 정보와 조회일자를 선택하여 검색하면 선택했던 공조기와 일자에 맞게 온도를 확인 할 수 있습니다.

<p align="center">
	<img width="700px" height="400px" src="https://user-images.githubusercontent.com/50833458/207274341-fb57b155-1e9c-468e-a4ad-84d7674f45ed.PNG"/>
</p>

* 습도를 보여주는 페이지입니다.

* 공조기 정보와 조회일자를 선택하여 검색하면 선택했던 공조기와 일자에 맞게 습도를 확인 할 수 있습니다.


## 🌟 배포

<p align="center">
	<img width="700px" height="400px" src="https://user-images.githubusercontent.com/50833458/207270237-82b00601-0e28-416f-b277-f2649dda90a6.png"/>
</p>

## History



