<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div class="table-outer mb-8">
    <v-data-table
      :hide-default-footer="true"
      :items="tableData"
      :headers="headerData"
    >
      <template v-slot:item.newHires="{ item }">
        <div class="user-profile-col">
          <v-img
            width="34"
            :src="`${item.newHires[0].profileImage}`"
            cover
          ></v-img>
          <p>{{ item.newHires[0].Name }}</p>
        </div>
      </template>
      <template v-slot:[`item.technical`]>
        <v-checkbox class="ms-0"></v-checkbox>
      </template>
      <template v-slot:[`item.joiningStatus`]="{ value }">
        <v-chip :color="getColor(value)">
          {{ value }}
        </v-chip>
      </template>
      <template v-slot:[`item.action`]>
        <v-menu location="bottom end" class="action-menu">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props" icon variant="text">
              <img
                :src="require('@/assets/images/action-icon.svg')"
                alt="Action"
              />
            </v-btn>
          </template>
          <v-list>
            <v-list-item link>
              <template v-slot:prepend>
                <img
                  :src="require('@/assets/images/view-icon.svg')"
                  alt="View"
                />
              </template>
              <v-list-item-title>View</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <template v-slot:prepend>
                <img
                  :src="require('@/assets/images/edit-icon.svg')"
                  alt="Edit"
                />
              </template>
              <v-list-item-title>Edit</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <template v-slot:prepend>
                <img
                  :src="require('@/assets/images/delete-icon.svg')"
                  alt="Delete"
                />
              </template>
              <v-list-item-title>Delete</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts" setup>
import user01 from "@/assets/images/user-1.png";
import user02 from "@/assets/images/user-2.png";
import user03 from "@/assets/images/user-3.png";
import user04 from "@/assets/images/user-4.png";

const headerData = [
  {
    title: "New Hires",
    key: "newHires",
    sortable: false,
  },
  {
    title: "Department",
    key: "department",
    sortable: false,
  },
  {
    title: "Role",
    key: "role",
    sortable: false,
  },
  {
    title: "Experience",
    key: "experience",
    sortable: false,
    align: "center",
  },
  {
    title: "Technical",
    key: "technical",
    sortable: false,
    align: "center",
  },
  {
    title: "Joining Status",
    key: "joiningStatus",
    sortable: false,
    align: "center",
  },
  {
    title: "Action",
    key: "action",
    sortable: false,
    align: "center",
  },
];
const tableData = [
  {
    newHires: [{ profileImage: user01, Name: "Karen Carpent" }],
    department: "Networking",
    role: "Maintanence",
    experience: "2 year",
    joiningStatus: "Not Joined",
  },
  {
    newHires: [{ profileImage: user02, Name: "Olly laoiss" }],
    department: "Admin",
    role: "QA",
    experience: "1 year",
    joiningStatus: "Joined",
  },
  {
    newHires: [{ profileImage: user03, Name: "Lemoc Bitraa" }],
    department: "Customer Support",
    role: "SRE",
    experience: "3 year",
    joiningStatus: "Joined",
  },
  {
    newHires: [{ profileImage: user04, Name: "Ornee Billas" }],
    department: "Finance",
    role: "Developer",
    experience: "2 year",
    joiningStatus: "Not Joined",
  },
];
function getColor(joiningStatus: any) {
  if (joiningStatus == "Joined") return "green";
  else return "blue";
}
</script>

<style lang="scss">
.table-outer {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
}
.action-menu {
  .v-list {
    color: #565656;
    padding: 5px 0;
    min-width: 121px;
    .v-list-item {
      min-height: 43px;
      padding: 4px 20px;
      .v-list-item__content {
        margin-left: 10px;
      }
      .v-list-item-title {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
.user-profile-col {
  display: flex;
  align-items: center;
  gap: 10px;
  .v-img {
    flex: none;
  }
  p {
    padding-bottom: 0;
  }
}
.v-table {
  line-height: 20px;
  color: #565656;
  th {
    vertical-align: middle;
  }
  .v-divider {
    display: none;
  }
  .v-table__wrapper {
    border-radius: 0;
    table {
      thead {
        tr {
          th {
            border-bottom: 1px solid #e2e2e2;
            color: #474747;
            height: 48px;
            white-space: nowrap;
            &.v-data-table-column--align-center {
              &.v-data-table__th--sortable {
                .v-data-table-header__content {
                  margin-right: -20px;
                }
              }
            }
            &:first-child {
              padding-left: 20px;
            }
          }
        }
      }
      tbody {
        tr {
          td {
            &.v-data-table__td {
              vertical-align: middle;
              border-bottom: 1px solid #e2e2e2;
              white-space: nowrap;
              height: 60px;
            }
            &:first-child {
              padding-left: 20px;
            }
          }
        }
      }
      .v-checkbox {
        display: inline-flex;
      }
      .v-chip {
        border-radius: 6px;
        height: 30px;
        padding: 4px 12px;
        white-space: nowrap;
        .v-chip__underlay {
          display: none;
        }
        &.text-blue {
          color: #41a592 !important;
          background-color: #eff5f4;
        }
        &.text-green {
          color: #4dbc4b !important;
          background-color: #eefcee;
        }
      }
    }
  }
  .v-data-table-footer {
    padding: 11px 12px;
    .v-pagination__item,
    .v-pagination__first,
    .v-pagination__prev,
    .v-pagination__next,
    .v-pagination__last {
      margin: 4px;
    }
    .v-input {
      margin-bottom: 0;
      min-width: 66px;
    }
    .v-field {
      font-size: 14px;
      line-height: 18px;
      min-height: 36px;
      .v-field__input {
        padding-left: 13px;
        padding-right: 4px;
        padding-top: 9px;
        padding-bottom: 9px;
        min-height: auto;
      }
      .v-field__append-inner > .v-icon {
        opacity: 1;
      }
      .v-select__selection-text {
        color: #565656;
        font-weight: 500;
      }
      .v-field__outline__start,
      .v-field__outline__end {
        border-color: #e2e2e2;
        opacity: 1;
      }
    }
  }
}
</style>
