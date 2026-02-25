import { Project } from './types';

export const projects: Project[] = [
  {
    name: 'LMS 시스템 (NestJS 마이그레이션 및 고도화)',
    repository: '',
    description: 'AI 및 웹개발 교육 서비스의 학습관리시스템(LMS)을 Django 기반에서 NestJS + GraphQL로 마이그레이션하고, 운영 효율과 성능을 개선',
    role: 'Backend Developer',
    period: '2025.01 - 2026.01',
    techStack: ['NestJS', 'GraphQL', 'TypeScript', 'PostgreSQL', 'DataLoader', 'Django', 'Python'],
    contributions: [
      'Django REST API를 NestJS + GraphQL로 점진적 마이그레이션',
      'GraphQL 스키마 설계 및 프론트엔드 협업 효율 개선',
      '강의-차시-콘텐츠-제출물 간 복잡한 관계형 데이터 모델링',
      'DataLoader를 활용한 N+1 쿼리 해결 및 API 응답 시간 30% 개선',
      '소프트 삭제 메커니즘 및 데이터 정합성 검증 시스템 구현',
    ],
    problemSolutions: [
      {
        title: '기존 LMS API 구조의 확장성 및 협업 한계',
        situation: 'Django 기반 REST API 구조에서 기능 추가 시 수정 범위가 넓어지고, 일부 기능이 FastAPI로 분리되어 있어 여러 프로젝트 수정이 필요. 프론트엔드에서 필요한 데이터 조합이 늘어나며 협업 비용 증가.',
        solution: '기존 LMS를 NestJS + GraphQL 기반으로 점진적 마이그레이션. GraphQL을 도입해 프론트엔드가 필요한 데이터만 선택적으로 요청 가능하도록 개선. 모듈 단위로 경계를 명확히 구분하여 코드 재사용성 향상.',
        result: '새 기능 추가 시 수정 범위가 줄어들고, 프론트엔드 협업 시간 절감. API 응답 구조의 유연성 확보.'
      },
      {
        title: '미사용 콘텐츠 삭제 시 데이터 정합성 문제',
        situation: '사용자가 삭제한 콘텐츠가 여전히 학습 진도나 제출물에서 참조되어 데이터 불일치 발생. 운영자가 진도율과 학습 데이터를 신뢰하기 어려운 상황.',
        solution: '하드 삭제 대신 소프트 삭제(deletedAt) 방식 도입. 삭제된 콘텐츠는 UI에서 숨기되 데이터베이스에는 유지. 삭제 전 참조 관계 검증 로직 추가 및 연관 데이터 정리 배치 작업 구현.',
        result: '학습 데이터 신뢰성 확보. 삭제 후에도 이력 추적 가능하여 운영 효율 개선.'
      },
      {
        title: 'GraphQL 관계형 데이터 조회 성능 이슈',
        situation: '강의-차시-콘텐츠-제출물 간 복잡한 관계 구조에서 @ResolveField 남용으로 N+1 쿼리 발생. API 응답 속도 저하.',
        solution: 'DataLoader 도입으로 배치 쿼리 처리. 반드시 필요한 필드에서만 관계형 데이터 로드하도록 스키마 구조 개선. 쿼리 단위 데이터 로딩 전략 재설계.',
        result: 'API 응답 시간 약 30% 개선. DB 부하 감소 및 대규모 사용자 요청 처리 안정성 확보.'
      },
      {
        title: '운영 효율이 낮은 학습/지원자 관리 프로세스',
        situation: '지원자 조회 및 관리 기능이 단순하고, 인터뷰 일정 및 상태 관리가 분산되어 운영팀의 업무 효율이 낮음.',
        solution: '지원자 조회 화면 전면 개선. 부분 검색, 한글 초성 검색, 상태/긴급도 필터 도입. Zapier Webhook 연동으로 인터뷰 일정 자동 업데이트 및 알림톡 자동 발송.',
        result: '운영팀의 수작업 시간 감소. 지원자 관리의 정확성과 신속성 향상.'
      }
    ]
  },
  {
    name: '교육 포탈 사이트 구축',
    repository: '',
    description: 'AI 및 웹개발 교육 서비스를 위한 교육 포탈 및 지원자 관리 시스템 개발',
    role: 'Backend Developer',
    period: '2022.02 - 2024.12',
    techStack: ['Python', 'Django', 'PostgreSQL', 'Zapier'],
    contributions: [
      '교육과정 지원자를 관리하는 지원서 및 관리자용 웹 애플리케이션 개발',
      '각 지원 단계별 알림톡 발송 및 되는시간 연동을 위한 Zapier 웹훅 연동',
      '학습자의 학습상태, 진도율 관리 및 학습자 초대, 강의 등록 기능 구현',
      '과정별 알림톡 메시지 관리 기능 구현',
      'RESTful API 설계 및 구현',
    ]
  },
  {
    name: '지원서/관리자 시스템',
    repository: '',
    description: '교육과정 지원자 관리 및 학습자 관리를 위한 관리자 시스템',
    role: 'Backend Developer',
    period: '2023.06 - 2026.01',
    techStack: ['Python', 'Django', 'PostgreSQL'],
    contributions: [
      '지원자 상태별 필터링 및 검색 기능 구현',
      '학습자 초대 및 권한 관리 시스템 구축',
      '학습 진도율 추적 및 리포팅 기능 개발',
      '관리자 대시보드 API 개발',
    ]
  }
];
